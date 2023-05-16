import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setDeleteModal } from '~/redux/features/globalSlice';

function ModelItem({ modelName }) {
  const dispatch = useDispatch();

  return (
    <div className="group relative flex aspect-[3/1] w-full max-w-sm overflow-hidden rounded bg-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:[box-shadow:0_1px_5px_1px_#ccc]">
      <h3 className="m-auto text-xl font-semibold transition-all duration-300 group-hover:font-bold group-hover:tracking-wider group-hover:text-white">
        {modelName}
      </h3>
      <button
        className="absolute right-0 top-0 cursor-pointer p-2 text-red-500 group-hover:block lg:hidden"
        onClick={() => dispatch(setDeleteModal({ status: true, filename: modelName }))}
      >
        <BsTrash size={24} />
      </button>
    </div>
  );
}

export default ModelItem;
