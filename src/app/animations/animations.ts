import { trigger, state, style, transition, animate, animateChild, query } from '@angular/animations';


export const onSideNavChange = trigger('onSideNavChange', [
  state('close',
    style({
      'min-width': '3.75rem'
    })
  ),
  state('open',
    style({
      'min-width': '20vw'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);


export const onMainContentChangeLeft = trigger('onMainContentChangeLeft', [
  state('close',
    style({
      'margin-left': '3.8rem'
    })
  ),
  state('open',
    style({
      'margin-left': '20vw'
    })
  ),
  transition('close => open', animate('250ms ease-in')),
  transition('open => close', animate('250ms ease-in')),
]);

export const onMainContentChangeRight = trigger('onMainContentChangeRight', [
  state('close',
    style({
      'margin-right': '3.8rem'
    })
  ),
  state('open',
    style({
      'margin-right': '20vw'
    })
  ),
  transition('close => open', animate('150ms ease-in')),
  transition('open => close', animate('150ms ease-in')),
]);


export const animateText = trigger('animateText', [
  state('hide',
    style({
      'display': 'none',
      opacity: 0,
    })
  ),
  state('show',
    style({
      'display': 'block',
      opacity: 1,
    })
  ),
  transition('close => open', animate('350ms ease-in')),
  transition('open => close', animate('200ms ease-out')),
]);
