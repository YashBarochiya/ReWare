const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Directory to store uploads
const UPLOAD_FOLDER = path.join(__dirname, '..', 'uploads');

// Auto-create uploads folder if it doesn't exist
if (!fs.existsSync(UPLOAD_FOLDER)) {
  fs.mkdirSync(UPLOAD_FOLDER, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, UPLOAD_FOLDER);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// Filter only images (JPEG, PNG, WebP)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPG, PNG, and WebP image files are allowed!'), false);
  }
};

// Multer upload instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024 // 2MB limit
  }
});

module.exports = {
  uploadSingle: upload.single('photo'),
  uploadMultiple: upload.array('photos', 5),
  rawMulter: upload // use this if you want to customize elsewhere
};
