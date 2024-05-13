import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../types";
import { toastError, toastSuccess } from "../../../utils/toastMessage";
import { deleteProject, getAllProjects } from "../../api/projects/projects.api";
export const useGetAllProjects = () => {
  const allProjects = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
  });

  return allProjects;
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const deleteProjectData = useMutation({
    mutationKey: ["delete-project"],
    mutationFn: deleteProject,
    onError: (error: AxiosError<ErrorResponse>) => {
      toastError(error.response?.data.message as string);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-projects"] });
      toastSuccess(data.message);
    },
  });
  return deleteProjectData;
};
