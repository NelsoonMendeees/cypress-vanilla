const testDescription = {
    nullFields: `
    <div>
      <span style="color: #800080; font-weight: bold;">Scenario: </span>
    </div>
    <div>
      <span style="color: #b22222;"> Submitting an image with invalid inputs</span>
    </div>
    <div style="margin-left: 40px;">
      <strong>Given</strong> I am on the image registration page<br/>
      <strong>When</strong> I enter "" in the title field<br/>
      <strong>Then</strong> I enter "" in the URL field<br/>
      <strong>Then</strong> I click the submit button<br/>
      <strong>Then</strong> I should see "Please type a title for the image" message above the title field<br/>
      <strong>And</strong> I should see "Please type a valid URL" message above the imageUrl field<br/>
      <strong>And</strong> I should see an exclamation icon in the title and URL fields
    </div>
    `,
    registerEnterKey: `
    <div>
    <span style="color: #800080; font-weight: bold;">Scenario: </span>
  </div>
  <div>
    <span style="color: #b22222;"> Submitting an image with valid inputs using enter key</span>
  </div>
  <div style="margin-left: 40px;">
    <strong>Given</strong> I am on the image registration page<br/>
    <strong>When</strong> I enter "Humanoide E.T" in the title field<br/>
    <strong>Then</strong> I should see a check icon in the title field<br/>
    <strong>When</strong> I enter "validUrl" in the URL field<br/>
    <strong>Then</strong> I can hit enter to submit the form<br/>
    <strong>And</strong> the list of registered images should be updated with the new item<br/>
    <strong>And</strong> the new item should be stored in the localStorage<br/>
    <strong>And</strong> The inputs should be cleared
  </div>
  `,
  registerSubmit: `
  <div>
  <span style="color: #800080; font-weight: bold;">Scenario: </span>
</div>
<div>
  <span style="color: #b22222;">Submitting an image and updating the list</span>
</div>
<div style="margin-left: 40px;">
  <strong>Given</strong> I am on the image registration page<br/>
  <strong>Then</strong> I enter "Alien Glass Statue" in the title field<br/>
  <strong>Then</strong> I enter "validUrl" in the URL field<br/>
  <strong>When</strong> I click the submit button<br/>
  <strong>And</strong> the list of registered images should be updated with the new item<br/>
  <strong>And</strong> the new item should be stored in the localStorage<br/>
  <strong>Then</strong> The inputs should be cleared
</div>
`,
submitRefresh: `
<div>
<span style="color: #800080; font-weight: bold;">Scenario: </span>
</div>
<div>
<span style="color: #b22222;">Refreshing the page after submitting an image clicking in the submit button</span>
</div>
<div style="margin-left: 40px;">
<strong>Given</strong> I am on the image registration page<br/>
<strong>Then</strong> I have submitted an image by clicking the submit button<br/>
<strong>When</strong> I refresh the page<br/>
<strong>Then</strong> I should still see the submitted image in the list of registered images<br/>
</div>
`
}

export default testDescription
