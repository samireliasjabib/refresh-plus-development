import { ActionFunctionArgs } from '@remix-run/node';
import { authenticate, apiVersion } from 'app/shopify.server';

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);

  try {
    // const requestBody = await request.json();

    const response = await admin.graphql(
      `#graphql
            query GetMainTheme {
            themes(first: 1, roles: [MAIN]) {
                edges {
                node {
                    id
                    files(first: 100, filenames: ["config/settings_data.json"]) {
                    edges {
                        node {
                        filename
                        body {
                            __typename
                            ...on OnlineStoreThemeFileBodyText {
                                content
                                __typename
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        `,
      { apiVersion }
    );

    const body = await response.json();
    const themeId = body.data.themes.edges[0].node.id;
    const settings = body.data.themes.edges[0].node.files.edges[0].node.body;
    const fileName =
      body.data.themes.edges[0].node.files.edges[0].node.filename;

    settings['refresh'] = Date.now().toString();

    const themeFilesUpsert = await admin.graphql(
      `#graphql
        mutation themeFilesUpsert($files: [OnlineStoreThemeFilesUpsertFileInput!]!, $themeId: ID!) {
          themeFilesUpsert(files: $files, themeId: $themeId) {
            upsertedThemeFiles {
              filename
            }
            userErrors {
              field
              message
            }
          }
        }
      `,
      {
        variables: {
          themeId,
          files: [
            {
              filename: fileName,
              body: {
                type: 'TEXT',
                value: JSON.stringify(settings),
              },
            },
          ],
        },
        apiVersion,
      }
    );

    console.log(themeFilesUpsert, 'themeFilesUpsert');

    const upsertData = await themeFilesUpsert.json();

    if (upsertData.data.themeFilesUpsert.userErrors.length > 0) {
      console.error(
        'Error upserting theme files:',
        upsertData.data.themeFilesUpsert.userErrors
      );
      throw new Error(upsertData.data.themeFilesUpsert.userErrors[0].message);
    }

    return new Response(
      JSON.stringify({
        success: true,
        response: 'Theme data fetched successfully',
      }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error fetching theme data:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch theme data' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};
