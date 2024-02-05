import { useForm } from "react-hook-form";
import { useGroup } from "../context/LinkContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function LinkGroupFormPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { createGroup, updateGroup, getGroup } = useGroup();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (params.id) {
        await updateGroup(params.id, data);
      } else {
        await createGroup(data);
      }
      navigate("/group");
    } catch (error) {
      console.log(error);
    }
  });
  useEffect(() => {
    const loadGroup = async () => {
      if (params.id) {
        const group = await getGroup(params.id);
        setValue("group_name", group.group_name);
      }
    };
    loadGroup();
  }, []);
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Group name"
            {...register("group_name", { required: true })}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          {errors.group_name && (
            <p className="text-red-500">Group name is required</p>
          )}
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default LinkGroupFormPage;
