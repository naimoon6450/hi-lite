import React from 'react';

const TestModal = props => {
  const { toggle } = props;
  return (
    <div>
      <div id="modal-container">
        <div class="modal-background">
          <div class="modal">
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
          </div>
        </div>
      </div>
      <div class="content">
        <h1>Modal Animations</h1>
        <div class="buttons">
          <div id="six" class="button" onClick={() => toggle()}>
            Sketch
          </div>
        </div>
      </div>
    </div>
  );
};
export default TestModal;
