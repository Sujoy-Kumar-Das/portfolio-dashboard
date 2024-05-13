import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../types";
import { toastError, toastSuccess } from "../../../utils/toastMessage";
import { deleteSkills, getAllSkills } from "../../api/skills/skills.api";
export const useGetAllSkills = () => {
  const allSkills = useQuery({
    queryKey: ["all-skills"],
    queryFn: getAllSkills,
  });

  return allSkills;
};

export const useDeleteSkill = () => {
  const queryClient = useQueryClient();
  const deleteSkillData = useMutation({
    mutationKey: ["delete-skill"],
    mutationFn: deleteSkills,
    onError: (error: AxiosError<ErrorResponse>) => {
      toastError(error.response?.data.message as string);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-skills"] });
      toastSuccess(data.message);
    },
  });
  return deleteSkillData;
};
