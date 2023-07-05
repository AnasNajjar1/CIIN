import { Fragment, useState } from "react";
import { Box, Flex, Input, Stack } from "@chakra-ui/react";
import {
  Table as ChakraTable,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/table";
export interface Column<T extends { id: string }> {
  label: React.ReactNode;
  key: keyof T & { action?: React.FC };
  width: string;
  Cell?: React.FC<{
    row: T;
  }>;
}
interface Props<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  enableExpanding?: boolean;
  renderDetailPanel?: (row: T, close: () => void) => React.FC;
}

function Table<T extends { id: string }>({
  columns,
  data,
  enableExpanding = false,
  renderDetailPanel,
}: Props<T>) {
  const [open, setOpen] = useState(data.map((row) => ({ [row.id]: false })));

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
        {data.map((row, index) => {
          return (
            <Fragment key={row.id}>
              <Tr sx={{ "& > :not(:first-of-type)": { textAlign: "center" } }}>
                {columns.map((column, index) => (
                  <Td key={index}>
                    {column.Cell
                      ? column.Cell({ row, setOpen })
                      : (row[column.key] as React.ReactNode)}
                  </Td>
                ))}
              </Tr>
              {enableExpanding && open[row.id] && (
                <>
                  <Tr>
                    <Td
                      colSpan={columns.length}
                      w="100%"
                      sx={{ borderBottom: "none" }}
                    >
                      {renderDetailPanel(row, () =>
                        setOpen((open) => ({ ...open, [row.id]: false })),
                      )}
                    </Td>
                  </Tr>
                </>
              )}
            </Fragment>
          );
        })}
      </Tbody>
    </ChakraTable>
  );
}

export default Table;
