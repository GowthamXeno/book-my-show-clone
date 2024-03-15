import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
// import { userContext } from "../../Context/UserContext";

export default function UserModal({
  isOpen,
  setIsOpen,
  setName,
  signin,
  setsignin,
  logoutfn,
}) {
  //   let [isOpen, setIsOpen] = useState(true);
  const [inputname, setInputname] = useState("");
  function closeModal() {
    setIsOpen(false);
    const Name = inputname.length === 0 ? "Guest" : inputname;
    setTimeout(() => {
      setName(Name);
    }, 400);
  }
  function Logout() {
    setIsOpen(false);
    setTimeout(() => {
      logoutfn();
    }, 400);
  }
function oncloseModal(){
  setIsOpen(false);
}
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={oncloseModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    <div className="flex justify-center w-auto h-10">
                      <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1666973032/ixaa8tyj24yv45cmgysl.png"></img>
                    </div>
                  </Dialog.Title>
                  {signin && (
                    <div className="mt-2">
                      <p className="text-base font-semibold text-red-600">
                        Welcome to Bookmyshow! Enjoy seamless movie bookings.
                      </p>
                      <p className="text-sm font-medium pt-8 text-gray-700 px-3">
                        Please Enter the Username to Login
                      </p>
                      <div className="flex items-center gap-2 px-3">
                        <p className="text-sm font-medium text-gray-700">
                          User Name:
                        </p>
                        <input
                          type="text"
                          placeholder="Enter Username"
                          className="p-0.5 my-2 outline-none"
                          autoFocus
                          onChange={(e) => setInputname(e.target.value)}
                        ></input>
                      </div>
                    </div>
                  )}
                  {!signin && (
                    <div className="mt-2">
                      <p className="text-base font-semibold text-red-600">
                        Thank you for experiencing our Book My Show Web App. We
                        look forward to welcoming you back soon
                      </p>
                    </div>
                  )}

                  <div className="mt-4">
                    {signin && (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 mx-3 py-2 text-sm font-medium text-red-700 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Login
                      </button>
                    )}
                    {!signin && (
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={Logout}
                      >
                        Logout
                      </button>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
