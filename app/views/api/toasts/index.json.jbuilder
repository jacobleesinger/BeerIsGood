json.array! @toasts do |toast|
  json.partial! 'api/toasts/toast', toast: toast
end
