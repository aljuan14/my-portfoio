import { redirect } from "@sveltejs/kit";
const load = async () => {
  throw redirect(307, "/?open=blog");
};
export {
  load
};
