import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useCreateProject } from "../api/api.hooks/projects/projects.hook";
import Container from "../components/shared/container/Container";
import From from "../components/shared/from/From";
import FromSubmit from "../components/shared/from/FromSubmit";
import InputField from "../components/shared/from/InputField";
import InputFile from "../components/shared/from/InputFile";
import TextArea from "../components/shared/from/TextArea";
import Heading from "../components/shared/heading/Heading";
import {
  createProjectSchema,
  featureSchema,
  imageSchema,
  technologySchema,
} from "../types";
import { toastError } from "../utils/toastMessage";
import { uploadImage } from "../utils/uploadImage/uploadImage";

export default function CreateProject() {
  const { reset } = useForm();
  const [basicInfo, setBasicInfo] = useState({});
  const [features, setFeatures] = useState<{ id: number; title: string }[]>([]);
  const [technology, setTechnology] = useState<{ id: number; title: string }[]>(
    []
  );

  const [image, setImage] = useState<{ id: number; link: string }[]>([]);

  const { mutateAsync } = useCreateProject();

  const handleBasicInfo = async (data: FieldValues) => {
    const imageURL = await uploadImage(data.image);
    const newBasicInfo = {
      title: data.title,
      live: data.live,
      code: { frontend: data.frontendCode, backend: data.backendCode },
      description: data.description,
      image: imageURL,
    };

    setBasicInfo(newBasicInfo);
  };

  const handleFeatures = (data: FieldValues) => {
    const newFeature = {
      id: features.length + 1,
      title: data.title,
    };

    setFeatures((prevFeatures) => [...prevFeatures, newFeature]);

    console.log([...features, newFeature]);
  };

  const handleTechnology = (data: FieldValues) => {
    const newTechnology = {
      id: technology.length + 1,
      title: data.title,
    };

    setTechnology((prevTechnology) => [...prevTechnology, newTechnology]);

    console.log([...technology, newTechnology]);
  };

  // handle image
  const handleImage = async (data: FieldValues) => {
    const imageURL = await uploadImage(data.image, reset);
    const newImage = {
      id: image.length + 1,
      link: imageURL,
    };

    setImage((prevImage) => [...prevImage, newImage]);
  };

  // create project
  const handleCreateProject = async () => {
    const basicInfoArray = Object.entries(basicInfo);

    if (!basicInfoArray.length) {
      return toastError("Please add basic info.");
    }
    if (!features.length) {
      return toastError("Please add minimum one feature.");
    }
    if (!technology.length) {
      return toastError("Please add minimum one technology.");
    }
    if (!image.length) {
      return toastError("Please add minimum one image.");
    }

    const addProjectData = {
      ...basicInfo,
      features,
      technology,
      images: image,
    };
    console.log(addProjectData);
    await mutateAsync({ data: addProjectData });
  };
  return (
    <Container>
      <div className=" w-full max-w-3xl mx-auto">
        <h1 className=" text-white font-bold text-2xl lg:text-5xl text-center mb-10">
          Create Project
        </h1>

        {/* basic info */}
        <div>
          <Heading>Basic Information</Heading>
          <From handler={handleBasicInfo} schema={createProjectSchema}>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 justify-cente">
              <InputField name="title" label="Title" type="text" />
              <InputField name="live" label="Live" type="text" />
              <InputField
                name="frontendCode"
                label="Frontend Code"
                type="text"
              />
              <InputField name="backendCode" label="Backend Code" type="text" />
              <TextArea name="description" label="Description" />
              <InputFile name="image" label="Image" />
            </div>
            <FromSubmit text="Add Basic Info" />
          </From>
        </div>

        {/* features */}
        <div className="divider"></div>
        <div>
          <Heading>Feature</Heading>
          <From handler={handleFeatures} schema={featureSchema}>
            <InputField name="title" label="Features" type="text" />
            <FromSubmit text="Add Feature" />
          </From>
        </div>

        {/* technology */}
        <div className="divider"></div>
        <div>
          <Heading>Technology</Heading>
          <From handler={handleTechnology} schema={technologySchema}>
            <InputField name="title" label="Technology" type="text" />
            <FromSubmit text="Add Technology" />
          </From>

          {/* image */}
          <div className="divider"></div>
          <div>
            <Heading>Images</Heading>
            <From handler={handleImage} schema={imageSchema}>
              <InputFile name="image" label="Image" />
              <FromSubmit text="Add Image" />
            </From>
          </div>

          <div className="divider"></div>
          <div className=" flex justify-center">
            <button className=" btn btn-primary" onClick={handleCreateProject}>
              Create Project
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
