import { Dialog, DialogPortal, DialogOverlay, DialogHeader, DialogTitle } from "../ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, CheckCircle2, Award, FileCheck, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { isoData } from "../../data/isoData";

interface ISOModalProps {
  isOpen: boolean;
  onClose: () => void;
  isoType: string;
}


export function ISOModal({ isOpen, onClose, isoType }: ISOModalProps) {
  const data = isoData[isoType];

  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 max-w-7xl w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
          {/* Header */}
          <DialogHeader className="p-8 pb-6 bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-blue-600 dark:bg-blue-700 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                    {data.title}
                  </DialogTitle>
                  <p className="text-lg text-foreground/70">
                    {data.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>

        {/* Scrollable Content */}
        {/* <ScrollArea className="h-[calc(90vh-180px)]"> */}
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Benefits Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Vantaggi
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {data.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/10 rounded-lg border border-blue-200 dark:border-blue-900"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            {/* <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Requisiti Principali
                </h3>
              </div>
              <div className="space-y-3">
                {data.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground/80">{requirement}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Process Section */}
            {/* <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Processo di Certificazione
                </h3>
              </div>
              <div className="space-y-3">
                {data.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/10 dark:to-transparent rounded-lg border-l-4 border-blue-600"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground/80 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        {/* </ScrollArea> */}

          {/* Footer */}
          <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-t border-blue-200 dark:border-blue-900 flex items-center justify-between gap-4">
            <p className="text-sm text-foreground/70">
              Vuoi saperne di più sulla certificazione {data.title}?
            </p>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => {
                onClose();
                window.location.href = "/#contact";
              }}
            >
              Richiedi Consulenza
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
