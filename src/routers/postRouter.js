import express from 'express'
import {getPostsController} from '../controllers/post/getPostsControllers.js'
import {createPostController} from '../controllers/post/createPostController.js'
import {updatePostController} from '../controllers/post/updatePostController.js'
import {patchPostController} from '../controllers/post/patchPostController.js'
import {deletePostController} from '../controllers/post/deletePostController.js'

const router = express.Router() 

router.get ('/', getPostsController)
router.post ('/', createPostController)
router.put ('/', updatePostController)
router.patch ('/', patchPostController)
router.delete ('/', deletePostController)

export default router