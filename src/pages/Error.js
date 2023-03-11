import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  let title = "an Error Occured";
  let message = "Something went Wrong!";

  if (error.status === 500) {
    // message = JSON.parse(error.data).message;
    //karena sudah menggunakan json maka : tidak perlu parse lagi
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not found!";
    message = "Could not find resource or page";
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;
