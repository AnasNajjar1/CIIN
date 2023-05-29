import {
  Box,
  Grid,
  GridItem,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { EyeEmpty, BookmarkEmpty, EmptyPage, Search } from "iconoir-react";
import DashboardCard from "../../components/DashboardCard";

export const Dashboard = () => {
  return (
    <Box p="85px 190px 60px 60px">
      <Box>
        <Text color="blue.800" fontWeight={700} fontSize={32}>
          Welcome!
        </Text>
      </Box>
      <Box pt={50}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <GridItem w="100%">
            <DashboardCard icon={EyeEmpty} title="Recently visited">
              <Box height="200px">
                <Box>
                  <Text fontWeight={700} fontSize="18px" color="blue.800">Companies</Text>
                </Box>
                <Stack divider={<StackDivider />} spacing="1" pt="20px">
                  <Box>
                    <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                      View a summary of all your clients over the last month.
                    </Text>
                  </Box>
                  <Box>
                    <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                      Acadian Asset Management LLC
                    </Text>
                  </Box>
                  <Box>
                    <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                      AGF Mangement Limited
                    </Text>
                  </Box>
                </Stack>
              </Box>
            </DashboardCard>
          </GridItem>
          <GridItem w="100%">
            <DashboardCard icon={BookmarkEmpty} title="Favourites">
              <Stack divider={<StackDivider />} spacing="1" height="200px">
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    Children’s Aid Society of Toronto
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    Letko, Brosseau & Associates Inc.
                  </Text>
                </Box>
              </Stack>
            </DashboardCard>
          </GridItem>
          <GridItem w="100%">
            <DashboardCard icon={EmptyPage} title="Saved reports">
              <Stack  spacing="1" height="150px">
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    Fondation J. Armand Bombardier
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    AGF Mangement Limited
                  </Text>
                </Box>
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    Letko, Brosseau & Associates Inc.
                  </Text>
                </Box>
              </Stack>
            </DashboardCard>
          </GridItem>
          <GridItem w="100%">
            <DashboardCard icon={Search} title="Search Queries">
              <Stack spacing="1" height="150px">
                <Box>
                  <Text pt="2" fontWeight={600} fontSize="14px" color="blue.800">
                    Fondation J. Armand Bombardier
                  </Text>
                </Box>
              </Stack>
            </DashboardCard>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;