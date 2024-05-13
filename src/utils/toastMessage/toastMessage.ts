import Swal from "sweetalert2";

export function toastError(message: string) {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function toastSuccess(message: string) {
  return Swal.fire({
    position: "top",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}
