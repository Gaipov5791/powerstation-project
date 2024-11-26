import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import images from '../data/imageData'; // Path to your `imageData.js`

const imagesPerPage = 6; // Number of images per page
const totalPages = Math.ceil(images.length / imagesPerPage); // Calculate the total number of pages

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImageIndex(null);
      setIsClosing(false);
    }, 300); // Match the duration of the transition
  };

  // Split images into pages
  const paginatedImages = Array.from({ length: totalPages }, (_, pageIndex) => {
    return images.slice(pageIndex * imagesPerPage, (pageIndex + 1) * imagesPerPage);
  });

	return (
		<div className="bg-gray-100 py-16" id="gallery">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="text-3xl font-bold text-gray-600">ГАЛЛЕРЕЯ</h2>
				</div>
				<div className="mt-8">
					{/* Swiper for Pagination and Navigation */}
					<Swiper
						modules={[Pagination, Navigation]}
						pagination={{
							clickable: true,
							el: '.custom-pagination', // Attach to custom class
						}}
						navigation
						className="gallery-swiper"
					>
						{paginatedImages.map((pageImages, pageIndex) => (
							<SwiperSlide key={pageIndex}>
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
									{pageImages.map((image, index) => (
										<div
											key={index}
											className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg"
											onClick={() => openModal(pageIndex * imagesPerPage + index)}
										>
											<img
												className="w-full h-64 object-cover"
												src={image.src}
												alt={image.alt}
											/>
										</div>
									))}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
					<div className="custom-pagination mt-4 flex justify-center"></div>
				</div>
			</div>

			{/* Modal with Slider */}
			{selectedImageIndex !== null && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
					<div
						className={`relative w-full max-w-4xl max-h-screen transform transition-transform duration-300 ${
						isClosing ? 'scale-90 opacity-0' : 'scale-100 opacity-100'
						}`}
						style={{
						animation: 'fadeIn 300ms ease-in-out forwards',
						}}
					>
						<button
							className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
							onClick={closeModal}
							aria-label="Close modal"
						>
						&times;
						</button>
						<img
							className="w-full h-auto rounded-lg shadow-lg"
							src={images[selectedImageIndex].src}
							alt={images[selectedImageIndex].alt}
						/>
					</div>
				</div>
			)}
		</div>
	);
};	

export default Gallery;


