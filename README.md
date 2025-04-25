## Nextjs Portfolio
This portfolio is a single-page web application designed in the style of the Steam UI by utilizing the **Next.js** framework and **Tailwind CSS**.
Data is requested from/to MongoDB to handle defining props and sending form data. 

To view this portfolio, please visit the website https://nextjs-portfolio-orcin-nu.vercel.app/, which is hosted through **Vercel**.  
 *DNS will be mapped to bokweb.site*  
  



## Usage
To use this portfolio...  
1. Download and unpack the zip into an empty folder.
2. Open the directory in your preferred IDE and run `npm i` or `yarn i` depending on your system. Ensure that you are running this command in the directory `package.json` is in.
3. Next, to ensure that the project will initially run, set a **MongoDB** connection URI in your environment files `.env` or `.env.local`
4. From this point, you should be able to see the application with the command `npm run dev`.

To configure your database; which will be used to define passed props...
1. Go into `src/models/` to view **Mongoose** models and take note of each field.
2. Now, when you connected to your **MongoDB URI** from *Step 4* above, a database should have automatically been created if you had not already.
3. Add the **3 collections**, `aboutmes`, `forms`, and `projects`.  
4. Ensuring you match the model fields...
    - **`aboutmes`**: Add single entry. The `heading` is viewed together with its `description` by their array index in the component.
    - **`projects`**: Add as many projects as needed; the components are dynamically capable of displaying multiple projects.  
  
** Important note **: To further personalize the portfolio, you can edit the static components, `BackgroundInfo.tsx`, and `SocialMedia.tsx` to your edits.  
  
Image Dimensions: 
  - AboutMe Image 800x600
  - AutoSlider Image 700x500
  - ProjectDisplay Preview Image 480x260
  - SocialMedia Image 240x240

Run `npm run dev` to see your data on the portfolio.

Author- B.Ok
