import { Box, Card } from '@shopify/polaris';
import TableHeaderActions from './components/TableHeaderActions';
import TableData from './components/TableData';

const RefreshDataTable = () => {
  return (
    <Box>
      <Card
        padding={{
          xs: '600',
          md: '800',
        }}
      >
        <TableHeaderActions />
        <TableData />
      </Card>
    </Box>
  );
};

export default RefreshDataTable;
