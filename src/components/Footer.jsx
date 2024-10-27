import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-[#380106] text-light py-10">
            <div className="px-8 flex justify-between mx-auto text-center">
                <div>
                    <p>&copy; 2024 Ayşe Şahin - Bütün Hakları Saklıdır</p>
                </div>
                <div>
                    <p>Developed by <a className='transition-colors duration-500 underline hover:text-link-hover' href='https://github.com/Quas-r' target='_blank'>Bora Eroğlu</a></p>
                </div>
            </div>
        </footer>
  )
}

export default Footer
