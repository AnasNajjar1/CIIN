import { useContext } from "react";
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
import AlertContext from "../../../../store/context/alertContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { associatesSchema } from "../../../../schemas/associates";
import RowForm from "../../RowForm";

interface Props {
  data: Associate;
  type: "add" | "update";
  close: () => void;
}

const AssociateForm = ({ data, close, type }: Props) => {
  const queryClient = useQueryClient();
  const alertContext = useContext(AlertContext);
  const { mutate: addAssociate } = useAddAssociate({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyAssociatesEnum.CompanyAssociates,
      );
      alertContext.show({
        status: "success",
      });
    },
    onSettled: (_, error, variables) => {
      if (error) {
        alertContext.show({
          status: "error",
          message: error.message,
          handleRetry: () => addAssociate(variables),
        });
      }
      close();
    },
  });
  const { mutate: updateAssociate } = useUpdateAssociate({
    onSuccess: async () => {
      await queryClient.invalidateQueries(
        ServerStateCompanyAssociatesEnum.CompanyAssociates,
      );
      alertContext.show({
        status: "success",
      });
    },
    onSettled: (_, error, variables) => {
      if (error) {
        alertContext.show({
          status: "error",
          message: error.message,
          handleRetry: () => updateAssociate(variables),
        });
      }
      close();
    },
  });
  const methods = useForm({
    defaultValues: data,
    resolver: yupResolver(associatesSchema),
  });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Stack>
        <RowForm label="Company">
          <InputField name="name" required placeholder="Company" width="75%" />
        </RowForm>
        <RowForm label="Plan Type">
          <Select
            name="plan_type"
            placeholder="- Plan Type -"
            w="75%"
            options={planTypeList}
          />
        </RowForm>
        {data?.type === "m" && (
          <>
            <RowForm label="Speciality/Mandate">
              <Select
                name="associate_specialty"
                placeholder="- Speciality/Mandate -"
                w="75%"
                options={specialityList}
              />
            </RowForm>
            <RowForm label="Value ($mil)">
              <InputField
                name="value"
                placeholder="Value ($mil)"
                width="75%"
              />
            </RowForm>
          </>
        )}

        <Flex gap="12px" w="100%" pt="12px">
          <Button size="sm" variant="outline" ml="auto" onClick={close}>
            Cancel
          </Button>
          <Button
            size="sm"
            onClick={handleSubmit(async (data) => {
              type === "add"
                ? await addAssociate({ ...data })
                : await updateAssociate({ ...data });
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
