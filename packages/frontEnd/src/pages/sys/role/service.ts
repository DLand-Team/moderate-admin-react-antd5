import { http } from "@/common/http";

//θ·εΎζι
export function updatePermissions(data: string[]) {
  return http.request({
    url: "/users/updatePermissions",
    method: "POST",
    data,
  });
}
