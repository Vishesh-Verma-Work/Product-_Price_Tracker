import PublicAxios from "../../../components/publicAxios";


const getBlog = async (id) => {
    const response = await PublicAxios.get(`/blogs/${id}`);

    return response.data;
}

export default getBlog