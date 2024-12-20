import {
    Box,
    Card,
    DataTable,
} from "@shopify/polaris";


import { HardRefreshTableRows as rows } from "../constants/constants";

function TableData() {
    return (
            <Card roundedAbove="xs" padding={"0"}>
                <DataTable
                    columnContentTypes={["text", "text", "text", "text"]}
                    headings={["Name", "Action", "Fee", "Updated"]}
                    rows={rows}
                    pagination={{
                        hasNext: true,
                        onNext: () => { },
                        label: "1 / 100",
                    }}
                />
            </Card>
    )
}

export default TableData