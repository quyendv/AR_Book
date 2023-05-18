import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import 'tippy.js/dist/tippy.css';
import modelApi from '~/api/model.api';
import ModelItem from '~/components/common/ModelItem';
import { setCreateModal } from '~/redux/features/globalSlice';

function ModelList() {
  const [models, setModels] = useState([]); // list modelNames
  // @ts-ignore
  const { deleteModal, createModal } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    const getModels = async () => {
      const { response, err } = await modelApi.getList();
      if (response) {
        const newList = getModelNames(response);
        setModels([...newList]);
      }
      // if err
    };
    if (!deleteModal && !createModal) getModels();
  }, [deleteModal, createModal]);

  const getModelNames = (response) => {
    const newList = [];
    for (let item of response) {
      if (item?.Key?.endsWith('.png')) {
        const modelName = item.Key.split('.png')[0];
        if (!newList.includes(modelName)) newList.push(modelName);
      }
    }
    return newList;
  };

  return (
    <main className="z-10 grid grid-cols-1 place-items-center gap-x-4 gap-y-4 p-10 transition-all sm:grid-cols-2 min-[950px]:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <Tippy content="Upload a new modal">
        <button
          className="fixed bottom-[10%] right-[10%] z-10 rounded-full bg-purple-600 p-1 text-white transition-all hover:-translate-y-1"
          onClick={() => dispatch(setCreateModal(true))}
        >
          <IoMdAddCircleOutline size={50} />
        </button>
      </Tippy>
      {models.map((model, index) => (
        <ModelItem modelName={model} key={index} />
      ))}
    </main>
  );
}

export default ModelList;
