import React, { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";
import { PuffLoader } from "react-spinners";

/**
 * Spinner component renders a loading spinner with optional loading text.
 *
 * @param {Object} props - The props for the Spinner component.
 * @param {boolean} props.isVisible - Whether the spinner is visible.
 * @param {string|null} [props.loadingText=null] - Optional loading text displayed below the spinner.
 * @returns {JSX.Element} The rendered Spinner component.
 */
const Spinner = ({ isVisible, loadingText = null }) => {
  return (
    <Transition appear show={isVisible} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-50 inset-0 overflow-y-auto flex flex-col items-center justify-center backdrop-blur-sm"
        onClose={() => {}}
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <DialogPanel className="fixed inset-0 bg-black-primary bg-opacity-30" />
        </TransitionChild>

        <div className="z-10 flex flex-col justify-center items-center">
          <PuffLoader size={60} color={"#fff"} loading={true} />
          {loadingText && (
            <p className="mt-4 text-lg text-gray-500">{loadingText}</p>
          )}
        </div>
      </Dialog>
    </Transition>
  );
};

export default Spinner;
