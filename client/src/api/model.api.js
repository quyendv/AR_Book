import publicInstance from '~/configs/axios.config';

const endPoints = {
  list: '/get',
  upload: '/upload',
  delete: ({ id }) => `/delete/${id}`,
};

const modelApi = {
  getList: async () => {
    try {
      const response = await publicInstance.get(endPoints.list);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  upload: async (formData) => {
    try {
      const response = await publicInstance.post(endPoints.upload, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return { response };
    } catch (err) {
      return { err };
    }
  },
  delete: async ({ id }) => {
    try {
      const response = await publicInstance.delete(endPoints.delete({ id }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default modelApi;
