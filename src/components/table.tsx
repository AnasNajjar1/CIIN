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
  key: keyof T;
  width: string;
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
        <Tr sx={{ "& > :not(:first-child)": { textAlign: "center" } }}>
          {columns.map((column) => (
            <Th
              bg="gray.50"
              w={column.width}
              borderRadius="8px"
              borderBottom="none"
              key={column.key as string}
            >
              {column.label}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row, index) => (
          <Tr
            sx={{ "& > :not(:first-child)": { textAlign: "center" } }}
            key={index}
          >
            {columns.map((column) => (
              <Td key={column.key as string}>
                {row[column.key] as React.ReactNode}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
