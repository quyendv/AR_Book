// @ts-nocheck
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import modelApi from '~/api/model.api';
import { setCreateModal } from '~/redux/features/globalSlice';

function CreateModal() {
  const { createModal } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const ref1 = useRef(); // iset
  const ref2 = useRef(); // fset
  const ref3 = useRef(); // fset3
  const ref4 = useRef(); // glb
  const ref5 = useRef(); // image

  const sendRequest = async (ref) => {
    const formData = new FormData();
    formData.append('file', ref?.current?.files[0]);

    const { response, err } = await modelApi.upload(formData);

    console.log(response, err);
  };

  const handleSubmit = () => {
    sendRequest(ref1);
    sendRequest(ref2);
    sendRequest(ref3);
    sendRequest(ref4);
    sendRequest(ref5);
    dispatch(setCreateModal(false));
  };

  return (
    <>
      <div
        className={`fixed ${
          createModal ? 'block' : 'hidden'
        } inset-0 z-50 grid place-content-center overflow-hidden bg-overlay p-5 sm:p-1`}
      >
        {/* Model Content */}
        <form className="relative w-full max-w-2xl rounded-lg bg-white shadow" onSubmit={handleSubmit}>
          {/* Model Header */}
          <div className="flex items-start justify-between border-b p-4">
            <h3 className="text-xl font-semibold text-gray-900">Upload a new Model</h3>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600"
              onClick={() => dispatch(setCreateModal(false))}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          {/* Modal Body */}
          <div className="grid grid-cols-1 gap-x-2 gap-y-2 p-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-lg font-medium text-gray-900 dark:text-white">
                File <span className="text-red-500">.iset</span>
              </label>
              <input
                ref={ref1}
                className="w-full cursor-pointer bg-gray-100 text-gray-900"
                type="file"
                accept=".iset"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium text-gray-900 dark:text-white">
                File <span className="text-red-500">.fset</span>
              </label>
              <input
                ref={ref2}
                className="w-full cursor-pointer bg-gray-100 text-gray-900"
                type="file"
                accept=".fset"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium text-gray-900 dark:text-white">
                File <span className="text-red-500">.fset3</span>
              </label>
              <input
                ref={ref3}
                className="w-full cursor-pointer bg-gray-100 text-gray-900"
                type="file"
                accept=".fset3"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium text-gray-900 dark:text-white">
                File <span className="text-red-500">.glb</span>
              </label>
              <input
                ref={ref4}
                className="w-full cursor-pointer bg-gray-100 text-gray-900"
                type="file"
                accept=".glb"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-lg font-medium text-gray-900 dark:text-white">
                <span className="text-red-500">Image</span> for model
              </label>
              <input
                ref={ref5}
                className="w-full cursor-pointer bg-gray-100 text-gray-900"
                type="file"
                accept="image/*"
                required
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end space-x-2 border-t border-gray-200 p-6">
            <button
              type="submit"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600"
              // TODO:
              // onClick={}
            >
              Upload
            </button>
            <button
              type="button"
              className="rounded-lg border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => dispatch(setCreateModal(false))}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateModal;
