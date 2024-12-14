"use client";

import { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { BarLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerifiation } from "@/actions/new-verification";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing token");
      return;
    }
    newVerifiation(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/auth/login"
      showSocial={false}
    >
      <div className="flex items-center justify-center w-full">
        {!success && !error && <BarLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
        {/* token expired error does not show up */}
      </div>
    </CardWrapper>
  );
};

export default NewVerificationForm;
