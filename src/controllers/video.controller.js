import { asycHandler } from "../utils/asyncHandler";


const getAllVideos = asycHandler(async(req, res) => {
    const {page = 1, limit = 10, query, sortBy, sortType, userId} = req.query
    // TODO
})

const publishAllVideo = asycHandler(async(req, res) => {
    const {title, description} = req.query
    // TODO
})

const getVideoById = asycHandler(async(req, res) => {
    const { videoId } = req.params
})

export {
    getAllVideos,
    publishAllVideo,
    getVideoById
}