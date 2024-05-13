import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ErrorResponse } from "../../../types";
import { toastError, toastSuccess } from "../../../utils/toastMessage";
import { deleteBlog, getAllBlogs } from "../../api/blogs/blogs.api";
export const useGetAllBlogs = () => {
  const allBlogs = useQuery({
    queryKey: ["all-blogs"],
    queryFn: getAllBlogs,
  });

  return allBlogs;
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  const deleteBlogData = useMutation({
    mutationKey: ["delete-blogs"],
    mutationFn: deleteBlog,
    onError: (error: AxiosError<ErrorResponse>) => {
      toastError(error.response?.data.message as string);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["all-blogs"] });
      toastSuccess(data.message);
    },
  });

  return deleteBlogData;
};
