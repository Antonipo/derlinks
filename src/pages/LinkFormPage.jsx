import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGroup } from "../context/LinkContext";

function LinkFormPage() {
  const { register, handleSubmit } = useForm();
  const { createLink } = useGroup();
  const navigate = useNavigate();

  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    data.group_id = Number(params.id);
    await createLink(data);
    //navigate(`/links/${params.id}`);
    navigate('/group');
  });
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            autoFocus
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <input
            type="url"
            placeholder="Url"
            {...register("url")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

export default LinkFormPage;
