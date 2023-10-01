// components/Pills.tsx
import React from 'react';


const Experience = () => {
  return (
    <>
        <div className='container mx-auto px-8 md:px-20'>
          <div className='columns-1 justify-center mt-[100px]'>
                <h4 className="text-center font-bold text-2xl">Experiences</h4>
                <p className='text-center text-gray-custom dark:text-[#94a3b8]'>My work and academic experiences</p>
             

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 justify-center mt-10">
                    <div className="w-full rounded-[20px] border-2 border-black dark:border-[#94a3b8] border-opacity-10 px-4 md:px-16 pt-16 pb-16">
                        <ol className="border-l border-neutral-300 dark:border-neutral-500">
                          {/*First item*/}
                          <li>
                            <div className="flex-start flex items-center pt-3">
                              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                2023-Current
                              </p>
                            </div>
                            <div className="mb-6 ml-4 mt-2">
                              <h4 className="mb-1.5 text-xl font-semibold">Contributor</h4>
                              <h5>Traffy Fondue Platform </h5>
                              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                sodales vehicula.
                              </p>
                            </div>
                          </li>
                          {/*First item*/}
                          <li>
                            <div className="flex-start flex items-center pt-3">
                              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                2022-2023
                              </p>
                            </div>
                            <div className="mb-6 ml-4 mt-2">
                              <h4 className="mb-1.5 text-xl font-semibold">Teaching Assistant (TA)</h4>
                              <h5>AI Builders</h5>
                              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                sodales vehicula.
                              </p>
                            </div>
                          </li>
                          {/*Second item*/}
                          <li>
                            <div className="flex-start flex items-center pt-2">
                              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                2022-2023
                              </p>
                            </div>
                            <div className="mb-6 ml-4 mt-2">
                              <h4 className="mb-1.5 text-xl font-semibold">Deputy Head of Data and Technology</h4>
                              <h5>Chula Politics Lab</h5>
                              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Libero expedita explicabo eius fugiat quia aspernatur autem
                                laudantium error architecto recusandae natus sapiente sit nam
                                eaque, consectetur porro molestiae ipsam an deleniti.
                              </p>
                            </div>
                          </li>

                        </ol>

                    </div>

                    <div className="w-full rounded-[20px] border-2 border-black dark:border-[#94a3b8] border-opacity-10 px-4 md:px-16 pt-16 pb-16">
                        <ol className="border-l border-neutral-300 dark:border-neutral-500">
                                                    {/*Third item*/}
                          <li>
                            <div className="flex-start flex items-center pt-2">
                              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                2022-2023
                              </p>
                            </div>
                            <div className="ml-4 mt-2 pb-5">
                              <h4 className="mb-1.5 text-xl font-semibold">Project Manager</h4>
                              <h5>Chula Mockup Parliament 2023</h5>
                              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Voluptatibus temporibus esse illum eum aspernatur, fugiat suscipit
                                natus! Eum corporis illum nihil officiis tempore. Excepturi illo
                                natus libero sit doloremque, laborum molestias rerum pariatur quam
                                ipsam necessitatibus incidunt, explicabo.
                              </p>
                            </div>
                          </li>
                          {/*First item*/}
                          <li>
                            <div className="flex-start flex items-center pt-3">
                              <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500" />
                              <p className="text-sm text-neutral-500 dark:text-neutral-300">
                                2022- Apr 2023
                              </p>
                            </div>
                            <div className="mb-6 ml-4 mt-2">
                              <h4 className="mb-1.5 text-xl font-semibold">Full Stack Developer</h4>
                              <h5>ESC</h5>
                              <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                scelerisque diam non nisi semper, et elementum lorem ornare.
                                Maecenas placerat facilisis mollis. Duis sagittis ligula in
                                sodales vehicula.
                              </p>
                            </div>
                          </li>

                        </ol>

                    </div>

                </div>

               

            </div>
        </div>
    </>
  );
};

export default Experience;

