import CardWrapper from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an accoutn?"
      backButtonHref="/auth/register"
      shwoSocial
    >
      login form
    </CardWrapper>
  );
};
