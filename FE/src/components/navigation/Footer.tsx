export default function Footer(){
    return(
        <footer className="h-[100px] bg-[#7f1d1d] flex items-center justify-center">
            <div>
                <p className="text-center text-white py-4">
                    © {new Date().getFullYear()} News App. All rights reserved.
                </p>
            </div>
        </footer>
    )
}