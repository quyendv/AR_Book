import { useDispatch, useSelector } from 'react-redux';
import modelApi from '~/api/model.api';
import { setDeleteModal } from '~/redux/features/globalSlice';

function DeleteModal() {
  // @ts-ignore
  const { deleteModal, deletedFileName } = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const handleDeleteFiles = () => {
    const deleteFile = async () => {
      await modelApi.delete({ id: `${deletedFileName}.iset` });
      await modelApi.delete({ id: `${deletedFileName}.fset` });
      await modelApi.delete({ id: `${deletedFileName}.fset3` });
      await modelApi.delete({ id: `${deletedFileName}.glb` });
      await modelApi.delete({ id: `${deletedFileName}.png` });
    };
    deleteFile();
    dispatch(setDeleteModal({ status: false, filename: null }));
  };

  return (
    <>
      <div
        className={`fixed ${
          deleteModal ? 'block' : 'hidden'
        } inset-0 z-50 grid place-content-center overflow-hidden bg-overlay p-5 sm:p-1`}
      >
        {/* Model Content */}
        <div className="relative w-full max-w-2xl rounded-lg bg-white shadow">
          {/* Model Header */}
          <div className="flex items-start justify-between border-b p-4">
            <h3 className="text-xl font-semibold text-gray-900">Delete model</h3>
            <button
              type="button"
              className="inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600"
              onClick={() => dispatch(setDeleteModal(false))}
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
          <div className="p-6">
            <p>
              Are you prepared to delete the model, including 4 files:{' '}
              <span className="text-red-500">.iset, .fset, .fset3, .glb</span>? There will be no way to recover them. Do
              you still want to proceed with the deletion?
            </p>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-end space-x-2 border-t border-gray-200 p-6">
            <button
              type="button"
              className="rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600"
              // TODO:
              onClick={handleDeleteFiles}
            >
              Delete
            </button>
            <button
              type="button"
              className="rounded-lg border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
              onClick={() => dispatch(setDeleteModal({ status: false, filename: null }))}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
