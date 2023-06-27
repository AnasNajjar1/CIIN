import { Flex, Stack } from "@chakra-ui/react";
import { useForm, FormProvider } from "react-hook-form";
import Select from "../../../../components/Forms/Select";
import InputField from "../../../../components/Forms/InputField";
import Button from "../../../../components/Shared/Button";
import { planTypeList, specialityList } from ".";
import {
  ServerStateCompanyAssociatesEnum,
  useAddAssociate,
  useUpdateAssociate,
} from "../../../../hooks/api/company/associates";
import { Associate } from "../../../../services/apiTypes/types";
import { useQueryClient } from "react-query";

interface Props {
  data: Associate;
  type: "add" | "update";
  close: () => void;
}

const AssociateForm = ({ data, close, type }: Props) => {
  const queryClient = useQueryClient();
  const { mutate: addAssociate } = useAddAssociate();
  const { mutate: updateAssociate } = useUpdateAssociate();
  const methods = useForm({
    defaultValues: data,
  });
  const { handleSubmit } = methods;
  return (
    <FormProvider {...methods}>
      <Stack>
        <InputField name="name" placeholder="Company" width="100%" />
        <Select
          name="plan_type"
          placeholder="- Plan Type -"
          w="100%"
          options={planTypeList}
        />
        {data?.type === "m" && (
          <>
            <Select
              name="associate_specialty"
              placeholder="- Speciality/Mandate -"
              w="100%"
              options={specialityList}
            />
            <InputField name="value" placeholder="Value ($mil)" width="100%" />
          </>
        )}

        <Flex gap="12px" w="100%" borderTop={"1px solid #E5E5E5"} pt="12px">
          <Button size="sm" variant="outline" ml="auto" onClick={close}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSubmit(async (data) => {
              type === "add"
                ? await addAssociate({ ...data },{
                    onSuccess: async () => {
                      queryClient.invalidateQueries(
                        ServerStateCompanyAssociatesEnum.CompanyAssociates,
                      );
                    },
                  })
                : await updateAssociate({ ...data },{
                    onSuccess: async () => {
                      queryClient.invalidateQueries(
                        ServerStateCompanyAssociatesEnum.CompanyAssociates,
                      );
                    },
                  });
              close();
            })}
          >
            Submit
          </Button>
        </Flex>
      </Stack>
    </FormProvider>
  );
};

export default AssociateForm;
