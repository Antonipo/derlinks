import { useForm } from "react-hook-form";
import { useGroup } from "../context/LinkContext";

function ModalFormLink({ open, onClose, link }) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { updateLink } = useGroup();

  const onSubmit = handleSubmit(async (data) => {
    try {
      data.group_id = link.group_id;
      onClose();
      await updateLink(link.link_id, data);
    } catch (error) {
      console.log(error);
    }
  });

  if (open) {
    setValue("name", link.name);
    setValue("url", link.url);
  } else {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors ${
        open ? "visible bg-black/20 backdrop-blur-sm" : "invisible"
      }`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`bg-zinc-800 flex items-center justify-center rounded-md shadow p-2 transition-all max-w-md w-full ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <div className="bg-zinc-800 max-w-md w-full p-10">
          <form onSubmit={onSubmit} className="flex flex-col">
            <input
              type="text"
              id="name"
              placeholder="Name"
              autoFocus
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-500">Name ir required</p>}
            <input
              type="url"
              id="url"
              placeholder="Url"
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
              {...register("url", { required: true })}
            />
            {errors.url && <p className="text-red-500">Url ir required</p>}
            <div className="mt-6">
              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Save
              </button>
            </div>
          </form>
          <button
            className="absolute top-2 right-3 p-1 rounded-lg text-gray-300  hover:text-gray-600"
            onClick={onClose}
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalFormLink;
