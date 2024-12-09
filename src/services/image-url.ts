import noImage from '../assets/no-image-placeholder.webp';

const getCroppedImageUrl = (url:string) => {
    if (!url) return noImage;
    const parts = url.split('media/');
    return `${parts[0]}media/crop/600/400/${parts[1]}`;
}
export default getCroppedImageUrl;