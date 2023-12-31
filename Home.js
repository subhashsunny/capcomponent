import React from "react";
function Home()
{
  return(
    
      <section class="bg-white ">
          <div class="container px-6 py-10 mx-auto">
              <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl ">Online Tranaction <br /> <span class="text-blue-500"></span></h1>
      </div>
              <div class="grid grid-cols-1 gap-12 mt-8 xl:mt-80 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
                  <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                      </span>
       
                      <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Bill payments</h1>
       
                      <p class="text-gray-500 dark:text-gray-300">
                          <table>
                              <tr><td>
                      <img src="/Images/trans1.png" width="130px"/></td><tr><td></td></tr>
                      <td>
                      <img src="/Images/bill.png" width="130px"/></td></tr></table>
                      </p>
       
                      <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                          <span class="mx-1"><a href="https://www.infinite.com/about-us/">Pay Now</a></span>
                          <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
       
                  <div class="flex flex-col items-center p-6 space-y-1 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                      </span>
       
                      <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Credit/Debit Cards</h1>
       
                      <p class="text-gray-500 dark:text-gray-300">
                      <table>
                              <tr><td>
                      <img src="/Images/gold.png" width="150px"/></td></tr></table>
                      </p>
       
                      <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                        <span class="mx-1"><a href="/cards">click here</a></span>
                       
                          <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
       
                  <div class="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                      <span class="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                      </span>
       
                      <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Transaction details</h1>
       
                      <p class="text-gray-500 dark:text-gray-300">
                      <table>
                              <tr><td>
                      <img src="/Images/mutual.png" width="200px"/></td></tr></table>
                      </p>
       
                      <a href="#" class="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                          <span class="mx-1">Check out here..</span>
                          <svg class="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      </a>
                  </div>
              </div>
      </section>
       
  );
  }

export default Home;