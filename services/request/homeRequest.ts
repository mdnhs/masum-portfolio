/* eslint-disable @typescript-eslint/no-explicit-any */
const postHeaderData: any = (props: any) => {
  return {
    method: "POST",
    path: `/home`,
    payload: props.payload,
  };
};

const getHeaderData: any = () => {
  return {
    method: "GET",
    path: `/home`,
  };
};

export { postHeaderData, getHeaderData };
