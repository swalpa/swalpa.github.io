type TProps <T = any> = {
  method: "POST" | "PUT" | "DELETE" | "GET";
  body?: any;
  token?: string;
  url: string;
};
export default async function apiCaller<T>({
  method,
  body,
  token,
  url,
}: TProps<T>) {
  const response = await fetch(
    url,
    {
      method,
      body: JSON.stringify(
        method === "GET" || method === "DELETE" ? undefined : { ...body, random: Math.random() }
      ),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );
  if (!response.ok || response.status !== 200) {
    throw new Error("Status not 200 or not ok");
  }
  const data: T = await response.json();
  return { data, status: response.status };
}
