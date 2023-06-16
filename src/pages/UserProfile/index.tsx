import {
  Box,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Person from "../../assets/menuIcons/person.svg";
import Subscription from "../../assets/subscription.svg";
import EditIcon from "../../assets/edit.svg";
import DeleteIcon from "../../assets/delete.svg";
import Calendar from "../../assets/calendar.svg";
import Lock from "../../assets/lock.svg";
import {
  CheckCircle,
  NavArrowDown,
  Lock as LockIcon,
  QuestionMark,
} from "iconoir-react";
import Button from "../../components/Shared/Button";
import {
  arrowDownOrLockStyle,
  bottomFirstTextStyle,
  bottomSecondTextStyle,
  calendarLeftIconStyle,
  cardTitleStyle,
  deleteIconStyle,
  editIconStyle,
  inputContainerStyle,
  inputStyle,
  inputTitleStyle,
  passwordSubTextStyle,
  questionMarkIconStyle,
  selectStyle,
  smallIconContainerStyle,
  smallIconStyle,
  successMessageTextStyle,
  titleTextStyle,
  successMessageContainerStyle,
  checkCirlceStyle,
  passwordInputContainerStyle,
  bottomCardContainerStyle,
} from "./styles";
import UserProfileCard from "../../components/Card/UserProfileCard";

const UserProfile: React.FC = () => {
  return (
    <>
      <Flex direction="column" p="20px 60px">
        {/* Upper Side */}
        <Flex direction="column">
          <Box pt={5}>
            <Text sx={titleTextStyle}>Profile detail</Text>
          </Box>
          {/* Cards Containers */}
          <Flex justify="space-between" pt={5}>
            {/* Left Card Container */}
            <Flex direction="column" width="49%">
              {/* Container Upper Side */}
              <Flex justify="space-between" align="center">
                <Flex align="center">
                  <Flex sx={smallIconContainerStyle}>
                    <Image sx={smallIconStyle} src={Person} />
                  </Flex>
                  <Box pl={3}>
                    <Text sx={cardTitleStyle}>Profile</Text>
                  </Box>
                </Flex>
                <Flex align="flex-end">
                  <Box cursor="pointer">
                    <Image sx={editIconStyle} src={EditIcon} />
                  </Box>
                  <Box pl={2} cursor="pointer">
                    <Image sx={deleteIconStyle} src={DeleteIcon} />
                  </Box>
                </Flex>
              </Flex>
              {/* Container Bottom Side - Card */}
              <UserProfileCard
                children={
                  <>
                    <Flex sx={inputContainerStyle} pt={4}>
                      <Text sx={inputTitleStyle}>User name</Text>
                      <Input
                        sx={inputStyle}
                        placeholder="JP"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                      />
                    </Flex>
                    <Flex sx={inputContainerStyle} pt={2}>
                      <Text sx={inputTitleStyle}>First Name</Text>
                      <Input
                        sx={inputStyle}
                        placeholder="Jean"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                      />
                    </Flex>
                    <Flex sx={inputContainerStyle} pt={2}>
                      <Text sx={inputTitleStyle}>Last Name</Text>
                      <Input
                        sx={inputStyle}
                        placeholder="Dupont"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                      />
                    </Flex>
                    <Flex sx={inputContainerStyle} pt={2} pb={8}>
                      <Text sx={inputTitleStyle}>Email</Text>
                      <Input
                        sx={inputStyle}
                        placeholder="jp@company.ca"
                        _placeholder={{ color: "gray.500" }}
                        type="email"
                      />
                    </Flex>
                  </>
                }
              />
            </Flex>
            {/* Right Card Container */}
            <Flex direction="column" width="49%">
              {/* Container Upper Side */}
              <Flex justify="space-between" align="center">
                <Flex align="center">
                  <Flex sx={smallIconContainerStyle}>
                    <Image sx={smallIconStyle} src={Subscription} />
                  </Flex>
                  <Box pl={3}>
                    <Text sx={cardTitleStyle}>Subscriptions</Text>
                  </Box>
                </Flex>
                <Flex align="flex-end">
                  <Box cursor="pointer">
                    <Image sx={editIconStyle} src={EditIcon} />
                  </Box>
                  <Box pl={2} cursor="pointer">
                    <Image sx={deleteIconStyle} src={DeleteIcon} />
                  </Box>
                </Flex>
              </Flex>
              {/* Container Bottom Side - Card */}
              <UserProfileCard
                children={
                  <>
                    <Flex sx={inputContainerStyle} pt={4}>
                      <Text sx={inputTitleStyle}>User role</Text>
                      <Select
                        sx={selectStyle}
                        width="196px"
                        height="32px"
                        icon={
                          <Box pl={1.5} mb={2}>
                            <Icon as={NavArrowDown} sx={arrowDownOrLockStyle} />
                          </Box>
                        }
                      >
                        <option>Admin</option>
                        <option>User</option>
                      </Select>
                    </Flex>
                    <Flex sx={inputContainerStyle} pt={2}>
                      <Text sx={inputTitleStyle}>Start Date</Text>
                      <Box>
                        <InputGroup>
                          <Input sx={inputStyle} type="date" />
                          <InputLeftElement
                            pb={2}
                            pr={1}
                            children={
                              <Image
                                sx={calendarLeftIconStyle}
                                src={Calendar}
                              />
                            }
                          />
                          <InputRightElement
                            pb={2}
                            pl={2}
                            children={
                              <Icon
                                as={NavArrowDown}
                                sx={arrowDownOrLockStyle}
                              />
                            }
                          />
                        </InputGroup>
                      </Box>
                    </Flex>
                    <Flex sx={inputContainerStyle} pt={2} pb="79px">
                      <Text sx={inputTitleStyle}>End Date</Text>
                      <Box>
                        <InputGroup>
                          <Input sx={inputStyle} type="date" />
                          <InputLeftElement
                            pb={2}
                            pr={1}
                            children={
                              <Image
                                sx={calendarLeftIconStyle}
                                src={Calendar}
                              />
                            }
                          />
                          <InputRightElement
                            pb={2}
                            pl={2}
                            children={
                              <Icon
                                as={NavArrowDown}
                                sx={arrowDownOrLockStyle}
                              />
                            }
                          />
                        </InputGroup>
                      </Box>
                    </Flex>
                  </>
                }
              />
            </Flex>
          </Flex>
          <Box pt={8}>
            <Flex justify="space-between" align="center" width="49%">
              <Flex align="center">
                <Flex sx={smallIconContainerStyle}>
                  <Image sx={smallIconStyle} src={Lock} />
                </Flex>
                <Box pl={3}>
                  <Text sx={cardTitleStyle}>Password</Text>
                </Box>
              </Flex>
              <Flex align="flex-end">
                <Box cursor="pointer">
                  <Image sx={editIconStyle} src={EditIcon} />
                </Box>
                <Box pl={2} cursor="pointer">
                  <Image sx={deleteIconStyle} src={DeleteIcon} />
                </Box>
              </Flex>
            </Flex>
            <Box pt={3}>
              <Flex sx={successMessageContainerStyle}>
                <Box pl={3} pt={1}>
                  <Icon as={CheckCircle} sx={checkCirlceStyle} />
                </Box>
                <Box pl={2}>
                  <Text sx={successMessageTextStyle}>
                    Your new password was successfully changed.
                  </Text>
                </Box>
              </Flex>
            </Box>
            <UserProfileCard
              children={
                <>
                  <Flex sx={bottomCardContainerStyle} pt={6}>
                    <Flex sx={passwordInputContainerStyle}>
                      <Text sx={inputTitleStyle}>Old password</Text>
                      <Box>
                        <InputGroup>
                          <Input
                            sx={inputStyle}
                            placeholder="Lorem123%$!"
                            _placeholder={{ color: "gray.500" }}
                            type="password"
                          />
                          <InputLeftElement
                            pb={2}
                            children={
                              <Icon sx={arrowDownOrLockStyle} as={LockIcon} />
                            }
                          />
                        </InputGroup>
                      </Box>
                    </Flex>
                  </Flex>
                  <Flex sx={bottomCardContainerStyle} justify="space-between">
                    <Flex sx={passwordInputContainerStyle}>
                      <Text sx={inputTitleStyle}>New password</Text>
                      <Flex direction="column" pt="40px">
                        <InputGroup>
                          <Input
                            sx={inputStyle}
                            placeholder="Enter your password"
                            _placeholder={{ color: "gray.500" }}
                            type="password"
                          />
                          <InputLeftElement
                            pb={2}
                            children={
                              <Icon sx={arrowDownOrLockStyle} as={LockIcon} />
                            }
                          />
                        </InputGroup>
                        <Text sx={passwordSubTextStyle} pt={1}>
                          New password must be at least 4 characters,
                          <br /> including at least 1 number and both lower
                          <br /> and upper case letters
                        </Text>
                      </Flex>
                    </Flex>
                    <Flex sx={passwordInputContainerStyle}>
                      <Text sx={inputTitleStyle}>Confirm new password</Text>
                      <Box>
                        <InputGroup>
                          <Input
                            sx={inputStyle}
                            placeholder="Enter your password"
                            _placeholder={{ color: "gray.500" }}
                            type="password"
                          />
                          <InputLeftElement
                            pb={2}
                            children={
                              <Icon sx={arrowDownOrLockStyle} as={LockIcon} />
                            }
                          />
                        </InputGroup>
                      </Box>
                    </Flex>
                  </Flex>
                </>
              }
              footer
              paddingFooter="0px 60px 30px 60px"
              childrenFooter={
                <Button variant="solid" size="sm">
                  Save changes
                </Button>
              }
            />
          </Box>
        </Flex>
        {/* Bottom Side */}
        <Flex align="center" p="50px 0px 30px 0px">
          <Flex sx={smallIconContainerStyle}>
            <Icon sx={questionMarkIconStyle} as={QuestionMark} />
          </Flex>
          <Flex pl={3}>
            <Text sx={bottomFirstTextStyle}>
              For assistance, please contact
            </Text>
            <Text sx={bottomSecondTextStyle} pl={1}>
              robert.martins@contexgroup.ca
            </Text>
            <Text sx={bottomFirstTextStyle}>.</Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default UserProfile;
