<script>
  let autofocus = null;

  $: if (autofocus !== null) {
    autofocus.focus();
  }
</script>

<button
  bind:this={autofocus}
  on:blur={event => console.log(event.target, 'blurred towards', event.relatedTarget)}
  on:focus={event => console.log(event.target, 'focused from', event.relatedTarget)}>
  focused
</button>
