import { useState, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoClose } from 'react-icons/io5';

const ImageLightbox = ({ imageUrl }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Event handler for opening the lightbox
    const openLightbox = useCallback(() => {
        setIsOpen(true);
        setIsLoading(true);
        // Prevent body scrolling when lightbox is open
        document.body.style.overflow = 'hidden';
    }, []);

    // Event handler for closing the lightbox
    const closeLightbox = useCallback(() => {
        setIsOpen(false);
        // Re-enable body scrolling
        document.body.style.overflow = '';
    }, []);

    // Handle image load complete
    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    // Cleanup function to ensure scrolling is re-enabled if component unmounts
    useEffect(() => {
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    // Close on ESC key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isOpen) {
                closeLightbox();
            }
        };

        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [isOpen, closeLightbox]);

    return (
        <>
            <div className="project_image_container w-full h-48 flex justify-center items-center overflow-hidden">
                <img
                    className="transition-all duration-500 ease-out hover:scale-110 w-full h-44 object-cover rounded cursor-pointer"
                    src={imageUrl}
                    alt="thumbnail"
                    onClick={openLightbox}
                    loading="lazy"
                />
            </div>

            {isOpen && createPortal(
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
                    onClick={closeLightbox}
                >
                    <div
                        className={`relative bg-gray-900/80 rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20 border border-gray-700/50 transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button positioned outside the image on larger screens, inside on mobile */}
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 z-10 bg-gray-800/70 hover:bg-gray-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:rotate-90"
                            aria-label="Close lightbox"
                        >
                            <IoClose className="text-2xl" />
                        </button>

                        {/* Loading indicator */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin"></div>
                            </div>
                        )}

                        <div className="p-1 md:p-2">
                            <img
                                src={imageUrl}
                                alt="enlarged"
                                className="max-h-[80vh] max-w-[90vw] md:max-h-[85vh] md:max-w-[80vw] rounded object-contain"
                                onLoad={handleImageLoad}
                                style={{ display: isLoading ? 'none' : 'block' }}
                            />
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
};

export default ImageLightbox;