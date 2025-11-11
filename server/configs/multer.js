import multer from "multer";

const storage = multer.diskStorage({});// No need to specify destination and filename, multer will handle it by default

export const upload = multer({storage})// Exporting the multer instance to be used in routes