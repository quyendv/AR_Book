import { BsTrash } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { setDeleteModal } from '~/redux/features/globalSlice';

function ModelItem({ modelName }) {
  const dispatch = useDispatch();

  const upperFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const convertSpaceToPercent = (str) => str.replace(/ /g, '%20'); // "a b c" to "a%b%c"

  const getImageModel = (modelName) =>
    `https://topcv-clone.s3.ap-southeast-1.amazonaws.com/${convertSpaceToPercent(modelName)}.png`;

  return (
    <div className="group relative w-full rounded bg-gray-300 p-2 transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:[box-shadow:0_1px_5px_1px_#ccc]">
      <h3 className="px-5 text-xl font-semibold transition-all duration-300 group-hover:font-bold group-hover:tracking-wider group-hover:text-white">
        {upperFirst(modelName)}
      </h3>
      <button
        className="absolute right-0 top-0 cursor-pointer p-2 text-red-500 group-hover:block lg:hidden"
        onClick={() => dispatch(setDeleteModal({ status: true, filename: modelName }))}
      >
        <BsTrash size={24} />
      </button>
      <div className="aspect-square p-2">
        <img className="h-full w-full rounded object-contain" src={getImageModel(modelName)} />
      </div>
    </div>
  );
}

export default ModelItem;
