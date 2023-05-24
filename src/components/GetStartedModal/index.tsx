import Button from "@/components/Button";
import GetStartedSuccessBox from "@/components/GetStartedSuccessBox";
import { modalDefaultConfig } from "@/config/constants";
import { SelectOption } from "@/config/types";
import cx from "classnames";
import { useFormik } from "formik";
import { useEffect, useRef, useState } from "react";
import ReactModal, { Props } from "react-modal";
import * as Yup from "yup";
import CloseIcon from "../Icons/CloseIcon";
import MintSomethingIcon from "../Icons/MintSomethingIcon";
import SelectComponent from "../SelectComponent";
import supabase from "../../supabase";

const options: SelectOption[] = [
  {
    label: "Website Development",
    value: "Website Development",
  },
  {
    label: "dApp Development",
    value: "dApp Development",
  },
  {
    label: "NFT Artwork Generation",
    value: "NFT Artwork Generation",
  },
  {
    label: "Token Creation",
    value: "Token Creation",
  },
  {
    label: "Smart Contract Integration",
    value: "Smart Contract Integration",
  },
  {
    label: "Smart Contract Audit",
    value: "Smart Contract Audit",
  },
  {
    label: "Blockchain Consulting",
    value: "Blockchain Consulting",
  },
  {
    label: "DeFi Applications",
    value: "DeFi Applications",
  },
  {
    label: "ICO/STO Development",
    value: "ICO/STO Development",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Label"),
  projectType: Yup.string().required().label("Project type"),
});

async function insertIntoSupabase(email:string, projectType:string): Promise<void>{
  console.log("I am here");
  const { data, error } = await supabase
  .from('Client Inquiries')
  .insert([
    { "email": email, 'project_type': projectType },
  ])
}


const GetStartedModal = (modalProps: Props) => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const {
    getFieldProps,
    handleSubmit,
    values,
    errors,
    touched,
    setFieldTouched,
    setFieldValue,
  } = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: "",
      projectType: "",
    },
    onSubmit(values, formikHelpers) {
      setStatus("loading");
      console.log(values.email, values.projectType);
      insertIntoSupabase(values.email, values.projectType);
      setTimeout(() => {
        setStatus("success");

        // setTimeout(() => {
        //   formikHelpers.resetForm();
        //   setStatus("idle");
        // }, 1500);
      }, 1500);
    },
  });

  useEffect(() => {
    if (!modalProps.isOpen) return;

    const timeoutId = setTimeout(() => {
      console.log("first");
      emailInputRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [modalProps.isOpen]);

  return (
    <>
      <ReactModal {...modalDefaultConfig} {...modalProps}>
        <div className="w-[calc(100vw-32px)] sm:w-[448px] rounded-lg border relative border-slate-6 p-6 pt-0 [&_*]:!font-inter bg-[url('/img/modal-bg.svg')] bg-cover bg-no-repeat">
          <button
            onClick={modalProps.onRequestClose}
            className="h-6 w-6 rounded bg-slate-1 border-slate-1 text-slate-11 hover:bg-slate-5 focus:ring-2 focus:ring-slate-7 focus:outline-none focus:bg-slate-6 disabled:hover:bg-slate-1 inline-flex items-center justify-center border disabled:cursor-not-allowed disabled:opacity-70 transition ease-in-out duration-200 cursor-pointer absolute top-6 right-6"
            type="button"
          >
            <CloseIcon />
          </button>

          <div className="py-12 flex justify-center">
            <MintSomethingIcon />
          </div>

          {status === "success" ? (
            <GetStartedSuccessBox />
          ) : (
            <>
              <div className="mt-4">
                <h2 className="mb-2 text-center text-2xl tracking-[-0.288px] text-slate-12 font-bold">
                  Let’s get started
                </h2>

                <p className="text-sm text-slate-11 font-normal text-center max-w-[323px] mx-auto">
                  Fill out the details below and our team will reach out to you 
                  as soon as possible.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
                className="max-w-[352px] mx-auto mt-8 flex flex-col gap-4 pb-8"
              >
                <div>
                  <label htmlFor="email" className="__label">
                    Email address
                  </label>
                  <input
                    id="email"
                    className={cx(
                      "__input mt-2",
                      errors["email"] && touched["email"] && "__input_error",
                    )}
                    type="email"
                    ref={emailInputRef}
                    placeholder="yourname@email.com"
                    {...getFieldProps("email")}
                  />
                </div>

                <SelectComponent
                  onValueChange={(value) => {
                    setFieldValue("projectType", value);
                  }}
                  onOpenChange={() => {
                    setFieldTouched("projectType", true);
                  }}
                  value={values["projectType"]}
                  options={options}
                  placeholder="What kind of project are you building?"
                  className={cx(
                    errors["projectType"] &&
                      touched["projectType"] &&
                      "__input_error",
                  )}
                />

                <Button loading={status === "loading"}>Get started</Button>
              </form>
            </>
          )}
        </div>
      </ReactModal>
    </>
  );
};

export default GetStartedModal;
