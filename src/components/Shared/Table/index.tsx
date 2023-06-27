import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
export interface Column<T> {
  label: React.ReactNode;
  key: keyof T & { action?: React.FC };
  width: string;
  Cell?: React.FC<{
    row: T;
  }>;
}
interface Props<T> {
  columns: Column<T>[];
  data: T[];
}
function Table<T>({ columns, data }: Props<T>) {
  return (
    <ChakraTable
      variant="simple"
      sx={{ borderSpacing: "4px 0", borderCollapse: "separate" }}
    >
      <Thead h="59px">
        <Tr sx={{ "& > :not(:first-of-type)": { textAlign: "center" } }}>
          {columns.map((column, index) => (
            <Th
              bg="gray.50"
              w={column.width}
              borderRadius="8px"
              borderBottom="none"
              key={index}
            >
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr
            sx={{ "& > :not(:first-of-type)": { textAlign: "center" } }}
            key={index}
          >
            {columns.map((column, index) => (
              <Td key={index}>
                {column.Cell
                  ? column.Cell({ row })
                  : (row[column.key] as React.ReactNode)}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
