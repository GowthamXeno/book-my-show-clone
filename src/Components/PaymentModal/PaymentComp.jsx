import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentModal({ isOpen, price, setIsOpen , state}) {
  function closeModal() {
    setIsOpen(false);
  }
  const openRazorpayCheckout = async () => {
    let options = {
      key: "rzp_test_lLHuxcpjEagR5o",
      amount: price * 100,
      image:
        "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
      currency: "INR",
      name: "Book My Show Clone",
      description: "Movie purchase or rent",
      handler: () => {
        setIsOpen(false);
        alert("Payment Succesful");
      },
      theme: { color: "#c4242d" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
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
                <Dialog.Panel className="w-90 max-w-md transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {state}
                  </Dialog.Title>
                  <div className="py-4">
                    <p className="text-sm text-gray-800 pb-2">
                      {state === "Rent" &&
                        `You can rent this movie for 30 days but will have 2 days
                      to watch it once you start playback (available for
                      download)`}
                      {state === "Buy" &&
                        `Watch the movie any time after purchasing it (available for download)`}
                    </p>
                    <hr></hr>
                    <div className="flex  py-3 justify-between">
                      <h3>HD</h3>
                      <div className="flex items-center gap-1">
                        ₹{price}
                        <FaCheckCircle className="text-green-500" />
                      </div>
                    </div>
                    <hr></hr>
                    <p className="text-sm pt-1 flex flex-col gap-2 text-gray-800">
                      <div>
                        Streaming supported on mobile, website, Android TV,
                        Apple TV, and Fire TV. Plays on compatible devices
                      </div>
                      <div>
                        By continuing, I agree to Terms and Conditions and
                        express my consent to complete the transaction
                      </div>
                    </p>
                  </div>

                  <div className=" flex mt-3 gap-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                      onClick={openRazorpayCheckout}
                    >
                      continue
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
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
